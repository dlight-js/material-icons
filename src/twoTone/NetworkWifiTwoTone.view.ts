import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NetworkWifiTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4zm0 4c-2.86 0-5.5.94-7.65 2.51L2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-1.43 1.43A12.99 12.99 0 0 0 12 8z\"/>")
      .name("NetworkWifiTwoTone")
  }
}

export default NetworkWifiTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
