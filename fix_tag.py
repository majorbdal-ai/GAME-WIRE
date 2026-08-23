import re
with open('index.html', 'r') as f:
    content = f.read()
pattern = r'(<meta name="google-site-verification" content=")[^"]+("\s*/>)'
new_content, count = re.subn(pattern, r'\g<1>4xP-4OJVEpE44QgYLHz4BKNYlEgEYYs8lAQZ_6gHgoQ\g<2>', content)
print("Replacements made:", count)
with open('index.html', 'w') as f:
    f.write(new_content)
