import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NextPlanSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 11.97h-5l2.26-2.26a4.94 4.94 0 0 0-3.76-1.74c-2.37 0-4.35 1.66-4.86 3.88l-.96-.32c.64-2.62 3-4.56 5.82-4.56 1.78 0 3.37.79 4.47 2.03L18 8.97v5z\"/>")
      .name("NextPlanSharp")
  }
}

export default NextPlanSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
