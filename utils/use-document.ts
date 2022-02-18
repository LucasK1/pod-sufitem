import { useEffect, useState } from 'react';

const useDocument = () => {
  const [pageDocument, setPageDocument] = useState<Document>();

  useEffect(() => {
    setPageDocument(document);
  }, []);

  return pageDocument;
};

export default useDocument;
