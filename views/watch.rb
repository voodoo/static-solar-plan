require 'rb-fsevent'

fsevent = FSEvent.new
fsevent.watch Dir.pwd do |directories|
  puts "inside"
  puts `tmpl.js *.html > ../js/views.js`
  puts "Detected change inside: #{directories.inspect}"
end

fsevent.run