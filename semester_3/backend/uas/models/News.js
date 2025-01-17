// import database
import prisma from '../config/database.js';

// membuat class News
class News {
  static async index() {
    return await prisma.news.findMany();
  }

  static async store(data) {
    return await prisma.news.create({
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        published: data.published,
        image: data.image,
        url: data.url,
        publishedAt: data.publishedAt,
        category: data.category,
      },
    });
  }

  static async update(id, data) {
    return await prisma.news.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        published: data.published,
        image: data.image,
        url: data.url,
        publishedAt: data.publishedAt,
        category: data.category,
      },
    });
  }

  static async destroy(id) {
    return await prisma.news.delete({
      where: {
        id: parseInt(id),
      },
    });
  }

  static async show(id) {
    return await prisma.news.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  static async search(query) {
    return await prisma.news.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
            },
          },
        ],
      },
    });
  }

  static async category(category) {
    return await prisma.news.findMany({
      where: {
        category: category,
      },
    });
  }
}

// export class News
export default News;
