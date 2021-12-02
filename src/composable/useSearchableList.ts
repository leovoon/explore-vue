import { Ref } from 'vue-demi'

interface SearchableListProps {
  items: Ref<Array<{}>>
  query: Ref<string>
  searchableProps: Ref<Array<string>>
}
export const useSearchableList = ({ items, query, searchableProps }: SearchableListProps) => {
  const results = computed(() => {
    // check if we have an actual value to use for search
    if (!query.value)
      return items.value

    // build a Regex to search the item object properties
    const matchRE = new RegExp(query.value, 'i')
    return items.value.filter((item) => {
      return searchableProps.value.some(prop => matchRE.test(String((item as any)[prop])))
    })
  })
  return results
}
