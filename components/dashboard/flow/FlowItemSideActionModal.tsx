import { useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import AskAISidePane from './AskAISidePane';
import DocumentSidePane from './DocumentSidePane copy';
import LinkSidePane from './LinkSidePane';
import ForEachSidePane from './ForEachSidePane';
import RunningFlowsItem from './RunningFlowsItem';

export default function FlowItemSideActionModal() {
    const { flowItemSidePane } = useAppSelector((state: RootState) => state.flow)

    return (
        <>
            {flowItemSidePane === "Ask AI" && <AskAISidePane />}
            {flowItemSidePane === "Document" && <DocumentSidePane />}
            {flowItemSidePane === "Link" && <LinkSidePane />}
            {flowItemSidePane === "For each" && <ForEachSidePane />}
            {flowItemSidePane === "Running Flow" && <RunningFlowsItem />}
        </>
    )
}
