environment-safe-chai
=====================
Ever since starting to run a single script I have to use an ugly compatibility block to import chai, something like:

```javascript
import * as chaiModule from 'chai';
const chai = (
   typeof process === 'object' && 
   typeof process.versions === 'object' && 
   typeof process.versions.node !== 'undefined'
)?chaiModule:window.chai;
```

This works across native node modules, native browser modules and babel (for compatibility). It's also ugly (and potentially updatable in the future), so I'm masking it in this module.

import it with:

```javascript
import { chai } from 'environment-safe-chai'; 
```
