// import database
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// membuat class News
class News {
  static async index() {
    try {
      return await prisma.news.findMany();
    } catch (error) {
      return await error
    }
  }

  static async store(data) {
    try {
      return await prisma.news.create({
        data: {
          title: data.title,
          description: data.description,
          content: data.content,
          published: data.published || true,
          image: data.image,
          url: data.url,
          publishedAt: new Date().toISOString(),
          category: data.category,
        },
      });
    } catch (error) {
      return error.message
    }
  }

  static async update(id, data) {
    try {
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
          category: data.category,
        },
      })
    } catch (error) {
      return await error
    }
  }

  static async destroy(id) {
    try {
      return await prisma.news.delete({
        where: {
          id: parseInt(id),
        },
      })
    } catch (error) {
      return await error
    }
  }

  static async show(id) {
    try {
      return await prisma.news.findUnique({
        where: {
          id: parseInt(id),
        },
      })
    } catch (error) {
      return await error
    }
  }

  static async search(query) {
    try {
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
      })
    } catch (error) {
      return await error
    }
  }

  static async category(category) {
    try {
      return await prisma.news.findMany({
        where: {
          category: category,
        },
      })
    } catch (error) {
      return await error
    }
  }
}

// export class News
export default News;
