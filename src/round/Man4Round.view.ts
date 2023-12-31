import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Man4Round {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L9.82 20.7c.1.74.74 1.3 1.49 1.3h1.38a1.5 1.5 0 0 0 1.49-1.3l1.56-11.44C15.89 8.07 14.96 7 13.75 7z\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/>")
      .name("Man4Round")
  }
}

export default Man4Round as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
