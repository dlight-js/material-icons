import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SuperscriptRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M10.51 12.73 7.3 7.72a1.112 1.112 0 1 1 1.88-1.19l2.76 4.46h.12l2.74-4.45c.2-.34.56-.54.95-.54.88 0 1.42.98.94 1.72l-3.23 5 3.55 5.55c.49.75-.05 1.73-.93 1.73-.38 0-.74-.2-.95-.52l-3.07-4.89h-.12l-3.07 4.89c-.21.32-.56.52-.95.52-.88 0-1.42-.97-.94-1.72l3.53-5.55zM23 8.5c0-.28-.22-.5-.5-.5H20V7h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2.5c-.28 0-.5.22-.5.5s.22.5.5.5H22v1h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2.5c.28 0 .5-.22.5-.5z\"/>")
      .name("SuperscriptRound")
  }
}

export default SuperscriptRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
