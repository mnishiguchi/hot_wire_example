# frozen_string_literal: true

class PageTitleComponent < ViewComponent::Base
  def initialize(title:)
    @title = self.class.format(title)
  end

  def self.format(title)
    title.upcase
  end
end
