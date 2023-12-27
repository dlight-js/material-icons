import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EqualizerTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z\"/>")
      .name("EqualizerTwoTone")
  }
}

export default EqualizerTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
