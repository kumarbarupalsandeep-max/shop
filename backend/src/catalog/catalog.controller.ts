import { Controller, Get, NotFoundException, Query, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalog: CatalogService) {}

  @Get('categories')
  categories() {
    return this.catalog.categories();
  }

  @Get('facets')
  facets(@Query('category') category?: string) {
    return this.catalog.facets(category);
  }

  @Get('products')
  products(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('category') category?: string,
    @Query('q') q?: string,
    @Query('sort') sort?: string,
  ) {
    return this.catalog.products({ page, limit, category, q, sort });
  }

  @Get('products/:slug')
  async product(@Param('slug') slug: string) {
    const product = await this.catalog.productBySlug(slug);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }
}
