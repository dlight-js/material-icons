import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FirstPageRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M17.7 15.89 13.82 12l3.89-3.89A.996.996 0 1 0 16.3 6.7l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0a.993.993 0 0 0-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z\"/>")
      .name("FirstPageRound")
  }
}

export default FirstPageRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
