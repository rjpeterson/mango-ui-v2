// import xw from 'xwind'
import dynamic from 'next/dynamic'
import { Responsive, WidthProvider } from 'react-grid-layout'

const TVChartContainer = dynamic(
  () => import('../components/TradingView/index'),
  { ssr: false }
)
import FloatingElement from '../components/FloatingElement'
import Orderbook from '../components/Orderbook'
import MarginInfo from './MarginInfo'
import TradeForm from './TradeForm'
import UserInfo from './UserInfo'

const ResponsiveGridLayout = WidthProvider(Responsive)

const layouts = {
  xl: [
    { i: 'tvChart', x: 0, y: 0, w: 3, h: 30 },
    { i: 'orderbook', x: 3, y: 0, w: 1, h: 17 },
    { i: 'tradeForm', x: 4, y: 0, w: 1, h: 17 },
    { i: 'marginInfo', x: 4, y: 1, w: 1, h: 13 },
    { i: 'useInfo', x: 0, y: 2, w: 3, h: 13 },
    { i: 'balanceInfo', x: 3, y: 2, w: 1, h: 13 },
    { i: 'extraInfo2', x: 4, y: 2, w: 1, h: 13 },
  ],
  lg: [
    { i: 'tvChart', x: 0, y: 0, w: 2, h: 30 },
    { i: 'orderbook', x: 2, y: 0, w: 1, h: 17 },
    { i: 'tradeForm', x: 3, y: 0, w: 1, h: 17 },
    { i: 'marginInfo', x: 3, y: 1, w: 1, h: 13 },
    { i: 'useInfo', x: 0, y: 2, w: 2, h: 13 },
    { i: 'balanceInfo', x: 2, y: 2, w: 1, h: 13 },
    { i: 'extraInfo2', x: 3, y: 2, w: 1, h: 13 },
  ],
}

const TradePageGrid = () => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ xl: 1600, lg: 1200, md: 996, sm: 768, xs: 0 }}
      cols={{ xl: 5, lg: 4, md: 3, sm: 2, xs: 1 }}
      rowHeight={15}
    >
      <div key="tvChart">
        <FloatingElement>
          <TVChartContainer />
        </FloatingElement>
      </div>
      <div key="orderbook">
        <FloatingElement>
          <Orderbook />
        </FloatingElement>
      </div>
      <div key="tradeForm">
        <TradeForm />
      </div>
      <div key="marginInfo">
        <MarginInfo />
      </div>
      <div key="useInfo">
        <UserInfo />
      </div>
      <div key="balanceInfo">6</div>
      <div key="extraInfo2">7</div>
    </ResponsiveGridLayout>
  )
}

export default TradePageGrid
