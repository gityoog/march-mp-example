import MarchMP from 'march-mp'
import './style.scss'
import IndexService from './service'

export default class extends MarchMP.Page {
  service = new IndexService
  onLoad({ url }: Partial<Record<string, string>>) {

  }
  render() {
    return <div>
      <button>首页测试</button>
    </div>
  }
}