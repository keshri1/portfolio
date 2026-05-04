# SEO Maintenance Checklist

## Immediate Actions (Do First - This Week)

### High Priority
- [ ] **Google Site Verification**
  - [ ] Go to https://search.google.com/search-console
  - [ ] Add property: https://keshri-dev.vercel.app
  - [ ] Verify ownership (DNS is easiest for Vercel)
  - [ ] Submit sitemap: https://keshri-dev.vercel.app/sitemap.xml
  - [ ] Check "Coverage" tab for any crawl errors

- [ ] **Bing Webmaster Tools**
  - [ ] Go to https://www.bing.com/webmasters
  - [ ] Add your site
  - [ ] Import from Google Search Console
  - [ ] Submit sitemap

- [ ] **Update Google Analytics/Verification Code**
  - [ ] Add your Google Site Verification code to `app/layout.tsx` metadata if needed
  - [ ] Set up Google Analytics 4 for tracking

### Medium Priority
- [ ] **Check Social Media Previews**
  - [ ] Open your site in Twitter Card Validator: https://cards-dev.twitter.com/validator
  - [ ] Open your site in Facebook Share Debugger: https://developers.facebook.com/tools/debug/
  - [ ] Verify OG images display correctly

- [ ] **Test Page Speed**
  - [ ] Run Google PageSpeed Insights: https://pagespeed.web.dev/
  - [ ] Note any Core Web Vitals issues
  - [ ] Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

- [ ] **Update Social Links**
  - [ ] Update Twitter handle in `lib/data.ts` if needed
  - [ ] Ensure all social profiles are complete with link back to portfolio

## Weekly Tasks

- [ ] Check Google Search Console for new indexing issues
- [ ] Monitor "Top Queries" in GSC to see what keywords you're ranking for
- [ ] Check for any "Crawl Errors" or "Coverage" issues
- [ ] Review page performance in Page Experience report

## Monthly Tasks

- [ ] Check rankings for target keywords using free tools:
  - Search "sunny keshri" on Google and check position
  - Search "keshri dev" on Google and check position
  - Search "full stack developer" and try to find your site
  
- [ ] Review analytics for traffic sources
- [ ] Check backlinks using Ahrefs/SEMrush free tier
- [ ] Update portfolio with new projects/experience
- [ ] Verify all links still work (use browser extensions like "Check My Links")

## Quarterly Tasks

- [ ] Update metadata if you change jobs or focus areas
- [ ] Refresh content with new projects or case studies
- [ ] Create technical blog posts (optional but very effective for SEO)
- [ ] Audit underperforming pages and improve them
- [ ] Review competitors' portfolios for inspiration

## Content Ideas for Blog Posts (Boosts SEO)

If you want to write blog posts (in addition to portfolio), consider:
- "Building Real-time Healthcare Dashboards with React and WebSockets"
- "Optimizing Fintech Applications for Performance and Security"
- "Next.js Best Practices I Learned at [Company]"
- "My Journey as a Full Stack Developer: 8 Years of Learning"
- "How We Reduced API Response Time by 60% Using GraphQL"

Blog posts help because:
- More indexable pages = more chances to rank
- Each post targets different keywords
- Posts can link back to your main portfolio

## Tools to Use (Free Tier)

| Tool | Purpose | Free Tier |
|------|---------|-----------|
| Google Search Console | Monitor search visibility | Unlimited |
| Google Analytics 4 | Track website traffic | Unlimited |
| Bing Webmaster Tools | Monitor Bing indexing | Unlimited |
| PageSpeed Insights | Test performance | Unlimited |
| Ahrefs Site Explorer | Backlink analysis | Limited but useful |
| SEMrush | Keyword research | 10 free searches/month |
| Ubersuggest | Keyword ideas | Limited free tier |
| Screaming Frog SEO Spider | On-page SEO audit | 500 page limit free |

## Ranking Timeline Expectations

**Current Status**: Portfolio recently optimized with proper metadata, sitemap, and structured data

**Timeline to Rankings**:
- **Week 1-2**: Google crawls and indexes your site (may already be indexed)
- **Week 3-4**: Start appearing for branded keywords ("sunny keshri")
- **Week 4-8**: May appear for "full stack developer" keywords (pages 3-5)
- **Month 2-3**: With consistent optimization, move to pages 1-2
- **Month 3-6**: Establish stable rankings

**Factors Affecting Rankings**:
- ✅ Metadata and structure (done)
- ✅ Mobile responsiveness (your site appears to have this)
- ✅ Page speed (check PageSpeed Insights)
- ⚠️ Backlinks (write blogs, get mentioned in tech communities)
- ⚠️ Content depth (add more content about your projects)
- ⚠️ Social signals (share your portfolio on LinkedIn, Twitter, etc.)

## Common SEO Issues to Avoid

❌ **Don't Do These:**
- Don't spam keywords in your content
- Don't buy backlinks
- Don't use redirect chains
- Don't hide text or use white text on white background
- Don't change URLs constantly
- Don't submit sitemap if there are crawl errors

✅ **Do These:**
- Write naturally for humans first, Google second
- Earn backlinks by creating good content
- Keep URLs stable
- Use semantic HTML
- Test on mobile devices
- Monitor your Search Console regularly

## Additional Resources

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Pro Tip**: Share your portfolio on these platforms for backlinks:
- Dev.to, HashNode, Medium (tech blogs)
- Product Hunt (if you're launching an update)
- Hacker News (if you write about a specific challenge)
- LinkedIn (share your journey)
- Twitter/X (engage with dev community)
- GitHub (showcase open source contributions)

Every backlink from a legitimate website helps your SEO ranking!
