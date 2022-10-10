## Testing

### Start Dev Server 
```bash
npm run dev
```
### Visit /fetch

Observe console logs of data and error on server-side and client-side

- server-side has data + no error
- client-side has no data + error

- data-sveltekit-fetched exists
- doesn't double fetch, but urql detects network error

### Visit /no-fetch

Observe console logs of data and error on server-side and client-side

- as expected
- server-side has data + no error
- client-side has data + no error

- data-sveltekit-fetched exists
- but double fetch, as expected but not preferred