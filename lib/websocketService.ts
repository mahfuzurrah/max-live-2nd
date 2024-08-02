import { io, Socket } from 'socket.io-client';

const SERVER_URL = 'http://localhost:5000';

export class WebSocketService {
  private socket: Socket | null;
  private token: string;

  constructor(token: string) {
    this.socket = null;
    this.token = token;
  }

  connect(): void {
    if (!this.token) {
      console.error('WebSocket Service: Token not found');
      return;
    }

    this.socket = io(SERVER_URL, {
      auth: {
        token: this.token,
      },
      transports: ['websocket']
    });

    this.socket.on('connect', () => {
      console.log('WebSocket Service: Connected to server');
    });

    this.socket.on('disconnect', () => {
      console.log('WebSocket Service: Disconnected from server');
    });

    this.socket.on('error', (error: any) => {
      console.error('WebSocket Service: Error', error);
    });
  }

  sendMessage(message: string): void {
    if (!this.socket) {
      console.error('WebSocket Service: Socket not initialized');
      return;
    }
    this.socket.emit('message', message);
  }

  onMessage(callback: (data: any) => void): void {
    if (!this.socket) {
      console.error('WebSocket Service: Socket not initialized');
      return;
    }

    this.socket.on('message', (data: any) => {
      callback(data);
    });
  }

  close(): void {
    if (this.socket) {
      this.socket.close();
      console.log('WebSocket Service: Connection closed');
    }
  }
}
