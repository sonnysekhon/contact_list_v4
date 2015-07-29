# Homepage (Root path)
require 'pry'

get '/' do
  erb :index
end

post '/contacts' do
  @contact = Contact.new(
    firstname: params[:firstname],
    lastname: params[:lastname],
    email: params[:email],
    phone: params[:phone]
    )
  @contact.save
  @contact.to_json
end

delete '/contacts/:id' do
  contact = Contact.find(params[:id])
  contact.destroy
end

put '/contacts/:id' do

end

get '/contacts' do
  @contacts = Contact.all
  @contacts.to_json
end

get '/contacts/search' do
  @contacts = Contact.search(params[:search])
  @contacts.to_json
end


