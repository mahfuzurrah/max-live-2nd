import { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';
import { WebSocketService } from '../../lib/websocketService.js';

interface WebSocketResponse {
  response?: any;
  status?: string;
}

export default function useWebSocket(message: any) {
  const [response, setResponse] = useState<WebSocketResponse | null>(null);
  const webSocketService = useRef<WebSocketService | null>(null);

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      console.error('WebSocket token not found');
      return;
    }

    if (!webSocketService.current) {
      webSocketService.current = new WebSocketService(token);
      webSocketService.current.connect();

      webSocketService.current.onMessage((data: WebSocketResponse) => {
        setResponse(data);
      });
    }
    webSocketService.current.sendMessage(message);

  }, [message]);

  useEffect(() => {
    if (response?.status === 'done') {
      webSocketService.current?.close();
      webSocketService.current = null;
    }
  }, [response]);

  return response;
}
