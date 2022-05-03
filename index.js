

// import  MyBlock  from './blocks/my-block.js'
import  ArticleHeader  from './blocks/article-header.js'
import  ArticleImg  from './blocks/article-img.js';
import  ArticleVideo  from './blocks/article-video.js';
import nestedCheckmarks from './blocks/nested-checkmarks.js';
import parentForCheckmarks from './blocks/parent-checkmarks.js';
import nestedNumbers from './blocks/nested-numbers.js';
import parentForNumbers from './blocks/parent-numbers.js';

import nestedQa from './blocks/nested-qa.js';
import parentQa from './blocks/parent-qa.js';

import nestedCustom from './blocks/nested-custom.js';
import parentCustom from './blocks/parent-custom.js';

import Quotation from './blocks/citations.js' 
import verifiedCustom from './blocks/verified-customer' 
import ctaButton from './blocks/cta' 
import AttentionBox from './blocks/attention-box' 
import FbImages from './blocks/fb-imgs' 



//Laraberg.registerBlock('article/my-block', MyBlock)

Laraberg.registerCategory('Article', 'article')
Laraberg.registerCategory('Parts', 'parts')

Laraberg.registerBlock('article/article-img', ArticleImg)
Laraberg.registerBlock('article/article-video', ArticleVideo)




Laraberg.registerBlock('article/article-header', ArticleHeader)
Laraberg.registerBlock('article/quotation', Quotation)

Laraberg.registerBlock('parts/nested-checkmark', nestedCheckmarks)
Laraberg.registerBlock('article/nested-checkmarks', parentForCheckmarks)
Laraberg.registerBlock('parts/nested-numbers', nestedNumbers)
Laraberg.registerBlock('article/nested-numbers', parentForNumbers)
Laraberg.registerBlock('parts/nested-qa', nestedQa)
Laraberg.registerBlock('article/nested-qa', parentQa)
Laraberg.registerBlock('parts/nested-custom', nestedCustom)
Laraberg.registerBlock('article/nested-custom', parentCustom)

Laraberg.registerBlock('article/verified-customer', verifiedCustom)
Laraberg.registerBlock('article/cta-button', ctaButton)
Laraberg.registerBlock('article/attention-box', AttentionBox)
Laraberg.registerBlock('article/fb-images', FbImages)






