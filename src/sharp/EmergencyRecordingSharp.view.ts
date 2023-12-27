import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class EmergencyRecordingSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M18 10.48V4H2v16h16v-6.48l4 3.98v-11l-4 3.98zM12 12l3 1.73-1 1.73-3-1.73V17H9v-3.27l-3 1.73-1-1.73L8 12l-3-1.73 1-1.73 3 1.73V7h2v3.27l3-1.73 1 1.73L12 12z\"/>")
      .name("EmergencyRecordingSharp")
  }
}

export default EmergencyRecordingSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
