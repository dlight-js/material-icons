import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class CompassCalibrationSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"12\" cy=\"17\" r=\"4\"/><path d=\"M12 3C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3z\"/>")
      .name("CompassCalibrationSharp")
  }
}

export default CompassCalibrationSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
