import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class NightShelterTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m12 5.5 6 4.5v9H6v-9l6-4.5m3 6.5h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z\" opacity=\".3\"/><path d=\"m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm3 9h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z\"/>")
      .name("NightShelterTwoTone")
  }
}

export default NightShelterTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
