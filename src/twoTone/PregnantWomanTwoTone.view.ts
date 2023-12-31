import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PregnantWomanTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9a3.285 3.285 0 0 0-2-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z\"/>")
      .name("PregnantWomanTwoTone")
  }
}

export default PregnantWomanTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
