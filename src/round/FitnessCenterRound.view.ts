import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class FitnessCenterRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m20.57 14.86.72-.72a.996.996 0 0 0 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0L17 15.57 8.43 7l2.86-2.86a.996.996 0 0 0 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0l-.72.72-.72-.72c-.39-.39-1.03-.39-1.42 0L5.57 4.14l-.72-.72a1.02 1.02 0 0 0-1.43 0 1.02 1.02 0 0 0 0 1.43l.72.72L2.71 7a.996.996 0 0 0 0 1.41l.72.72-.72.73a.996.996 0 0 0 0 1.41l.02.02c.39.39 1.02.39 1.41 0L7 8.43 15.57 17l-2.86 2.86a.996.996 0 0 0 0 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72.72.72c.39.39 1.02.39 1.41 0l1.43-1.43.72.72c.39.39 1.04.39 1.43 0 .39-.39.39-1.04 0-1.43l-.72-.72L21.29 17a.996.996 0 0 0 0-1.41l-.72-.73z\"/>")
      .name("FitnessCenterRound")
  }
}

export default FitnessCenterRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
