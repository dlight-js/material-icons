import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class DomainDisabledRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M.71 2.39a.996.996 0 0 0 0 1.41L2 5.1V19c0 1.1.9 2 2 2h13.9l2.29 2.29a.996.996 0 1 0 1.41-1.41L2.12 2.39a.996.996 0 0 0-1.41 0zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm-2-4V9h2v2H4zm6 8H8v-2h2v2zm-2-4v-2h2v2H8zm4 4v-2h1.9l2 2H12zM8 5h2v2h-.45L12 9.45V9h7c.55 0 1 .45 1 1v7.45l2 2V9c0-1.1-.9-2-2-2h-8V5c0-1.1-.9-2-2-2H5.55L8 5.45V5zm8 6h2v2h-2z\"/>")
      .name("DomainDisabledRound")
  }
}

export default DomainDisabledRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
