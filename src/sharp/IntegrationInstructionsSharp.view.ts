import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class IntegrationInstructionsSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18V3zM11 14.17l-1.41 1.42L6 12l3.59-3.59L11 9.83 8.83 12 11 14.17zm1-9.92c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm2.41 11.34L13 14.17 15.17 12 13 9.83l1.41-1.42L18 12l-3.59 3.59z\"/>")
      .name("IntegrationInstructionsSharp")
  }
}

export default IntegrationInstructionsSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
