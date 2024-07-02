import os
from livereload import Server

project_path = os.path.expanduser('~/Faculdade/MoneyTables/test')
index_html = os.path.join(project_path, 'index.html')
styles_css = os.path.join(project_path, 'styles.css')
script_js = os.path.join(project_path, 'script.js')

server = Server()

server.watch(index_html)
server.watch(styles_css)
server.watch(script_js)

server.serve(root=project_path, open_url_delay=1)

