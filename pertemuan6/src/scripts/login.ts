const form = document.querySelector<HTMLFormElement>('#login-form')
const status = document.querySelector<HTMLElement>('#login-status')

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLInputElement>(':invalid')
      firstInvalid?.focus()
      status.textContent = 'Please complete all required fields correctly.'
      status.className = 'mt-3 text-sm text-rose-700'
      return
    }

    const data = new FormData(form)
    const username = String(data.get('username') || '').trim()
    status.textContent = `Welcome back, ${username}. Login form is valid.`
    status.className = 'mt-3 text-sm text-emerald-700'
  })
}
