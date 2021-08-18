import { useEffect, useState } from 'react';

const useDocument = () => {
  const [_document, set_document] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);

  return _document;
};

export default useDocument;
