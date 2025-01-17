// import Model News
import News from '../models/News.js';

// buat class NewsController
class NewsController {
  // buat fungsi
  async index(req, res) {
    const news = await News.index();
    res.json(news);
  }

  async store(req, res) {
    const data = req.body;
    const news = await News.store(data);
    res.json(news);
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body;
    const news = await News.update(id, data);
    res.json(news);
  }

  async destroy(req, res) {
    const id = req.params.id;
    const news = await News.destroy(id);
    res.json(news);
  }

  async show(req, res) {
    const id = req.params.id;
    const news = await News.show(id);
    res.json(news);
  }

  async search(req, res) {
    const query = req.query;
    const news = await News.search(query);
    res.json(news);
  }

  async category(req, res) {
    const category = req.params.category;
    const news = await News.category(category);
    res.json(news);
  }
}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
export default object;
