import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class TurnRightTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m17.17 11-1.59 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H9c-1.1 0-2 .9-2 2v9h2v-9h8.17z\"/>")
      .name("TurnRightTwoTone")
  }
}

export default TurnRightTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
