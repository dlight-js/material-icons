import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AirportShuttleOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M17 5H3a2 2 0 0 0-2 2v9h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-6-6zm-2 2h1l3 3h-4V7zM9 7h4v3H9V7zM3 7h4v3H3V7zm3 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm12 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM21 14h-.78c-.55-.61-1.34-1-2.22-1s-1.67.39-2.22 1H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3v-2h18v2z\"/>")
      .name("AirportShuttleOutlined")
  }
}

export default AirportShuttleOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
