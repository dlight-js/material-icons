import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DomainVerificationSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z\"/><path d=\"M3 4v16h18V4H3zm16 14H5V8h14v10z\"/>")
      .name("DomainVerificationSharp")
  }
}

export default DomainVerificationSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
