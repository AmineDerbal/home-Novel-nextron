import getData from '../../services/gerUrlData';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    console.log('post');
    const { url } = req.body;
    console.log('the url', url);
    res.json(getData(url));
  }
  console.log('no post');
  return 'no post';
};

export default handler;
