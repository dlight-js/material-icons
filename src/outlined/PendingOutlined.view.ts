import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PendingOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/><circle cx=\"7\" cy=\"12\" r=\"1.5\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/><circle cx=\"17\" cy=\"12\" r=\"1.5\"/>")
      .name("PendingOutlined")
  }
}

export default PendingOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
