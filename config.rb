activate :autoprefixer do |prefix|
  prefix.browsers = ['last 1 version', '>1%', 'not dead']
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload
end

configure :production do
  activate :asset_hash
  activate :minify_css
  activate :minify_javascript

  set :build_dir, 'build'
end
