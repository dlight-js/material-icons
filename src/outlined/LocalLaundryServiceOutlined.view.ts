import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LocalLaundryServiceOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 2.01 6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM18 20H6L5.99 4H18v16z\"/><circle cx=\"8\" cy=\"6\" r=\"1\"/><circle cx=\"11\" cy=\"6\" r=\"1\"/><path d=\"M12 19c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm2.36-7.36c1.3 1.3 1.3 3.42 0 4.72-1.3 1.3-3.42 1.3-4.72 0l4.72-4.72z\"/>")
      .name("LocalLaundryServiceOutlined")
  }
}

export default LocalLaundryServiceOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>