import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TimeToLeaveOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 6h10.29l1.04 3H5.81l1.04-3zM19 16H5v-4.66l.12-.34h13.77l.11.34V16z\"/><circle cx=\"7.5\" cy=\"13.5\" r=\"1.5\"/><circle cx=\"16.5\" cy=\"13.5\" r=\"1.5\"/>")
      .name("TimeToLeaveOutlined")
  }
}

export default TimeToLeaveOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
