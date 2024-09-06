import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const URL_API_BEACHES = 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=-44.629%2C22.304%2C30.781%2C47.186&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json'
const useBeaches = () => {
  const getBeaches = useQuery({
    queryKey: ['beaches'],
    queryFn: async () => {
      const { data } = await axios(URL_API_BEACHES)
      return data
    },
  })

  const beachesSpain = getBeaches.data?.features.map((beach) => {
    return {
      // ...beach.attributes,
      latitude: beach.geometry.y,
      longitude: beach.geometry.x,
      name: beach.attributes.Nombre || beach.attributes.Nombre_a_1,
      subName: beach.attributes.Nombre_alt,
      description: beach.attributes.Descripci,
      address: beach.attributes['Dirección'],
      city: beach.attributes['Término_M'],
      observation: beach.attributes.Observacio,
      accessibility: beach.attributes['Forma_de_a'],
      parking: beach.attributes['Aparcamien'],
      guardedParking: beach.attributes['Aparca_1'],
      numberParking: beach.attributes['Aparcami_2'],
      wc: beach.attributes['Aseos'],
      flag: beach.attributes['Bandera_az'],
      sand: beach.attributes['Composici'],
      typeSand: beach.attributes['Tipo_de_ar'],
      condition: beach.attributes['Condicione'],
      codeIN: beach.attributes['Código_IN'],
      nudism: beach.attributes['Nudismo'],
      id: beach.attributes.Identifica,
      value: beach?.attributes.Identifica,
      label: `${beach.attributes.Nombre || beach?.Nombre_a_1} - ${beach.attributes['Término_M']}`,
    }
  })

  return { beachesSpain, getBeaches }
}

export default useBeaches