import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DeliveryDiningRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 7c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L13.52 14H10v-4c0-.55-.45-1-1-1H6c-2.21 0-4 1.79-4 4v2c0 .55.45 1 1 1h1c0 1.66 1.34 3 3 3s3-1.34 3-3h3.52c.61 0 1.18-.28 1.56-.75l3.48-4.35c.29-.36.44-.8.44-1.25V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z\"/><path d=\"M6 6h3c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm13 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\"/>")
      .name("DeliveryDiningRound")
  }
}

export default DeliveryDiningRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
