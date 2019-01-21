export function areOddArraysEqual(a, b) {
  if (a === null || b === null) return false
  return a.length === b.length && a.every((value, index) => {
    // When checking descs, ignore versionDate
    const match = /[dD]esc.*?versionDate="[^""]+"/.exec(value)
    if (match) {
      return value.replace(/versionDate="[^""]+"/, '') === b[index].replace(/versionDate="[^""]+"/, '')
    }
    return value === b[index]
  })
}

export function areDocElsEqual(a, b) {
  const match = /[dD]esc.*?versionDate="[^""]+"/.exec(a)
  if (match) {
    return a.replace('xmlns="http://www.tei-c.org/ns/1.0"', '').replace(/versionDate="[^""]+"/, '').replace(/\s+/g, ' ') === b.replace('xmlns="http://www.tei-c.org/ns/1.0"', '').replace(/versionDate="[^""]+"/, '').replace(/\s+/g, ' ')
  }
  return a === b
}

export function insertBetween(parent, element, before, after) {
  const lastElBefore = Array.from(parent.querySelectorAll(before)).pop()
  if (lastElBefore) {
    parent.insertBefore(element, lastElBefore.nextSibling)
  } else {
    const firstElAfter = Array.from(parent.querySelectorAll(after)).shift()
    if (firstElAfter) {
      parent.insertBefore(element, firstElAfter)
    } else {
      parent.appendChild(element)
    }
  }
  return element
}