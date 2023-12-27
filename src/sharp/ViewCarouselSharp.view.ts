import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewCarouselSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M2 7h4v10H2V7zm5 12h10V5H7v14zM18 7h4v10h-4V7z\"/>")
      .name("ViewCarouselSharp")
  }
}

export default ViewCarouselSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
