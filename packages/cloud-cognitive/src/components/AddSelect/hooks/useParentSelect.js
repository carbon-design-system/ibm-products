//
<<<<<<< HEAD
// Copyright IBM Corp. 2022
=======
// Copyright IBM Corp. 2022, 2022
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { useState } from 'react';

const useParentSelect = () => {
  const [parentSelected, setParentSelected] = useState(null);

  return {
    parentSelected,
    setParentSelected,
  };
};

export default useParentSelect;
