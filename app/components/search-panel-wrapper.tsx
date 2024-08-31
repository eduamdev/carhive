import { getLocations } from "@/db/queries"

import { SearchPanel } from "./search-panel"

export async function SearchPanelWrapper(props: any) {
  const locations = await getLocations()

  return <SearchPanel locations={locations} {...props} />
}
