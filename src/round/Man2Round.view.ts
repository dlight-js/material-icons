import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Man2Round {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14 7h-4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h1.5v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V15H15c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2z\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/>")
      .name("Man2Round")
  }
}

export default Man2Round as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
