import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NaturePeopleOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<circle cx=\"4.5\" cy=\"9.5\" r=\"1.5\"/><path d=\"M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 14 16.06V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88a7 7 0 0 0 6.17-6.95zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/>")
      .name("NaturePeopleOutlined")
  }
}

export default NaturePeopleOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
