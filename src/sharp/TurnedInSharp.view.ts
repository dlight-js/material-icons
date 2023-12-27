import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnedInSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 3H5v18l7-3 7 3V3z\"/>")
      .name("TurnedInSharp")
  }
}

export default TurnedInSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
