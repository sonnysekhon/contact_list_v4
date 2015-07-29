require 'pry'

class Contact < ActiveRecord::Base
  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true, uniqueness: true

  def self.search(query)
    where("firstname = ? OR lastname = ? OR email = ? OR id = ?", "#{query}", "#{query}", "#{query}", "#{query}")
  end
end