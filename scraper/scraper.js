import { Q } from './pulse.consumer.js'

Q('input').subscribe(async ({ url }) => {
    const request = await fetch(url)
    const content = await request.text()
    const title = content.split('<title>')[1].split('</title>')[0]
    Q('output').emit({ title })
})