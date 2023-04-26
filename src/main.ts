const login = async <T>(url: string, value: T): Promise<{message: string}> => {
  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(value),
  }).then((res) => res.json())
}

//

const form = document.querySelector('form')
const output = document.querySelector('output')

if (form) {
  // form
}
